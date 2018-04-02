export class Modal {
  constructor(imgSrc) {
    this.fragment = document.createDocumentFragment();

    this.modalOverlay = document.createElement('div');
    this.modalOverlay.className = 'modal-overlay';

    this.modalContent = document.createElement('div');
    this.modalContent.className = 'modal-content';

    this.modalImg = document.createElement('img');
    this.modalImg.src = imgSrc;
    this.modalImg.className = 'modal-img';

    this.closeButton = document.createElement('button');
    this.closeButton.className = 'close-button';
    this.closeButton.innerHTML = '<i class="fa fa-times fa-3x"></i>';
    this.closeButton.onclick = () => this.close();
  }

  open() {
    this.modalContent.appendChild(this.modalImg);
    this.modalContent.appendChild(this.closeButton);
    this.fragment.appendChild(this.modalOverlay);
    this.fragment.appendChild(this.modalContent);
    document.body.appendChild(this.fragment);
  }

  close() {
    document.body.removeChild(this.modalOverlay);
    document.body.removeChild(this.modalContent);
  }
}
