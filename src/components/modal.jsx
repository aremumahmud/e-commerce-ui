import '../css/modal.css'

function Modal({display}) {
  return (
    <div style={{display}} className="modalWrap">
      <div class="card">
        <div class="header1">
          <span class="icon1">
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                clip-rule="evenodd"
                d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                fill-rule="evenodd"></path>
            </svg>
          </span>
          <p class="alert">New message!</p>
        </div>

        <p class="message">
          Seems like your internet connection is down. kindly check your internet connection and click
          the 'Retry' button to reload the page
        </p>

        <div class="actions1">
          <a class="read" href="">
            Retry
          </a>

         
        </div>
      </div>
    </div>
  );
}


export default Modal