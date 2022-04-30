import { BaseComponent } from '../../component.js';

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`
      <section class="video">
        <div class="video__plater">
          <iframe class="video__iframe"></iframe>
          <h3 class="video__title"></h3>
        </div>
      </section>
    `);
    console.log(url);
    const iframe = this.element.querySelector(
      '.video__iframe'
    )! as HTMLIFrameElement;
    iframe.src = this.convertToEmbeddedURL(url);

    const titleElement = this.element.querySelector(
      '.video__title'
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }

  private convertToEmbeddedURL(url: string): string {
    const splited = url.split('=');
    const id = splited[splited.length - 1];
    return `https://www.youtube.com/embed/${id}`;
  }
}
