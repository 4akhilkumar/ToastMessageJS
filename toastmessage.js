let toastContainer;

function generateToast({ status, message}) {

  // Check any childs are already present in the toastcontainer
  if (toastContainer.children.length > 0) {
    // Get the text inside the div with class name toast-message-part
    const toastMessagePart = toastContainer.children[0].children[0].children[1].innerText;
    if(toastMessagePart === message) {
      console.log('Toast already present');
      return;
    }
  }

  toastContainer.insertAdjacentHTML('beforeend', `<p class="toast ${status}">
    <span class='toast-message-section'>
      <span class='toast-status-part'>${status.charAt(0).toUpperCase() + status.slice(1)}</span>
      <span class='toast-message-part'>${message}</span>
    </span>
  </p>`)
  const toast = toastContainer.lastElementChild;
  toast.addEventListener('animationend', () => toast.remove())
}


(function initToast() {
  document.body.insertAdjacentHTML('afterbegin', `<div class="toast-container"></div>
  <style>  

    .toast-container {
      position: fixed;
      top: 1rem;
      right: 1rem;
      display: grid;
      justify-items: end;
      gap: 1.5rem;
    }

    .toast {
      display: flex;
      column-gap: 8px;
      line-height: 1;
      padding: 1rem;
      border-radius: 5px;
      width: 350px;
      align-items: center;
      align-content: center;
      animation: toastIt 4400ms cubic-bezier(0.785, 0.135, 0.15, 0.86) forwards;
    }

    @keyframes toastIt {
      0%,
      100% {
        transform: translateY(-150%);
        opacity: 0;
      }
      10%,
      90% {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @media (min-width: 280px) and (max-width: 480px) {
      .toast {
        width: 18em;
      }
    }

    .toast-message-section {
      display: flex;
      flex-direction: column;
      row-gap: 4px;
      font-family: system-ui;
    }

    .toast-status-part {
      font-weight: 600;
    }

    .toast-message-part {
      line-height: 1.25;
      hyphens: auto;
    }

    @media (min-width: 280px) and (max-width: 480px) {
      .toast-status-part, .toast-message-part {
        font-size: 0.9rem;
      }
    }

    .toast.success {
      background: #FFF;
      color: #0F9D58;
      border: 2px solid #0F9D58;
      box-shadow: 0 2px 26px #0F9D5820;
    }

    .toast.success::before {
      font-family: 'Material Icons';
      content: "check_circle_outline";
      -webkit-font-feature-settings: 'liga' 1;
      -moz-font-feature-settings: 'liga' 1;
      font-feature-settings: 'liga' 1;
      font-size: 24px;
    }

    .toast.success::after {
      content: '';
      position: absolute;
      display: block;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 0 0 0 2px;
      border-bottom: 3.5px solid #0F9D58;
      animation: progress 4000ms linear forwards;
    }

    .toast.info {
      background: #FFF;
      color: #4285F4;
      border: 2px solid #4285F4;
      box-shadow: 0 2px 26px #4285F420;
    }

    .toast.info::before {
      font-family: 'Material Icons';
      content: "info";
      -webkit-font-feature-settings: 'liga' 1;
      -moz-font-feature-settings: 'liga' 1;
      font-feature-settings: 'liga' 1;
      font-size: 24px;
    }

    .toast.info::after {
      content: '';
      position: absolute;
      display: block;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 0 0 0 2px;
      border-bottom: 3.5px solid #4285F4;
      animation: progress 4000ms linear forwards;
    }

    .toast.warning {
      background: #FFF;
      color: #F4B400;
      border: 2px solid #F4B400;
      box-shadow: 0 2px 26px #F4B40020;
    }

    .toast.warning::before {
      font-family: 'Material Icons';
      content: "warning";
      -webkit-font-feature-settings: 'liga' 1;
      -moz-font-feature-settings: 'liga' 1;
      font-feature-settings: 'liga' 1;
      font-size: 24px;
    }

    .toast.warning::after {
      content: '';
      position: absolute;
      display: block;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 0 0 0 2px;
      border-bottom: 3.5px solid #F4B400;
      animation: progress 4000ms linear forwards;
    }

    .toast.error {
      background: #FFF;
      color: #DB4437;
      border: 2px solid #DB4437;
      box-shadow: 0 2px 26px #DB443720;
    }

    .toast.error::before {
      font-family: 'Material Icons';
      content: "error";
      -webkit-font-feature-settings: 'liga' 1;
      -moz-font-feature-settings: 'liga' 1;
      font-feature-settings: 'liga' 1;
      font-size: 24px;
    }

    .toast.error::after {
      content: '';
      position: absolute;
      display: block;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 0 0 0 2px;
      border-bottom: 3.5px solid #DB4437;
      animation: progress 4000ms linear forwards;
    }

    @keyframes progress {
      100% {
        width: 0%;
      }
    }

  </style>`);
  toastContainer = document.querySelector('.toast-container');
})()

// if user click on button class flat-btn then get the first class value in it using jquery
var randomMessages = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                      "Fusce sed massa finibus, tempus odio vitae, auctor dolor.",
                      "Vivamus sit amet urna ut ipsum molestie rhoncus eget id nisi.",
                      "Nunc at massa consectetur, auctor ipsum ut, mollis risus."
                     ];

$('.flat-btn').click(function() {
  var className = $(this).attr('class').split(' ')[0];
  generateToast({
    status: className,
    message: randomMessages[Math.floor(Math.random() * randomMessages.length)]
    // message: "Ya sure about that? Ya sure about that?",
  });
});