(function () {
  function getFormData(form) {
    const elements = form.elements;
    let honeypot;

    const fields = Object.keys(elements)
      .filter(function (k) {
        if (elements[k].name === "honeypot") {
          honeypot = elements[k].value;
          return false;
        }
        return true;
      })
      .map(function (k) {
        if (elements[k].name !== undefined) {
          return elements[k].name;
        } else if (elements[k].length > 0) {
          return elements[k].item(0).name;
        }
      })
      .filter(function (item, pos, self) {
        return self.indexOf(item) === pos && item;
      });

    const formData = {};
    fields.forEach(function (name) {
      const element = elements[name];

      formData[name] = element.value;

      if (element.length) {
        const data = [];
        for (let i = 0; i < element.length; i++) {
          const item = element.item(i);
          if (item.checked || item.selected) {
            data.push(item.value);
          }
        }
        formData[name] = data.join(", ");
      }
    });

    // add form-specific values into the data
    formData.formDataNameOrder = JSON.stringify(fields);
    formData.formGoogleSheetName = form.dataset.sheet || "responses";
    formData.formGoogleSendEmail = form.dataset.email || "";

    return { data: formData, honeypot: honeypot };
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = getFormData(form);
    const data = formData.data;

    if (formData.honeypot) {
      return false;
    }

    disableButtons(form);
    const url = form.action;
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        form.reset();
        const formElements = form.querySelectorAll(".form-element");
        if (formElements && formElements.length) {
          formElements.forEach((e) => (e.style.display = "none"));
        }
        const thankYouMessage = form.querySelector(".thankyou_message");
        if (thankYouMessage) {
          thankYouMessage.style.display = "block";
        }
      }
    };
    const encoded = Object.keys(data)
      .map(function (k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
      })
      .join("&");
    xhr.send(encoded);
  }

  function loaded() {
    // bind to the submit event of our form
    const forms = document.querySelectorAll("form.gform");
    for (let i = 0; i < forms.length; i++) {
      forms[i].addEventListener("submit", handleFormSubmit, false);
    }
  }
  document.addEventListener("DOMContentLoaded", loaded, false);

  function disableButtons(form) {
    const buttons = form.querySelectorAll(".button");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }
})();
