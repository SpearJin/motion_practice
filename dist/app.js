import { ImageCompoent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import { PageComponent, PageItemComponent, } from './components/page/page.js';
import { InputDialog } from './components/dialog/dialog.js';
class App {
    constructor(appRoot) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);
        const image = new ImageCompoent('Image Title', 'https://picsum.photos/600/300');
        this.page.addChild(image);
        const video = new VideoComponent('Video Title', 'https://www.youtube.com/watch?v=lvNOcspBdPU');
        this.page.addChild(video);
        const note = new NoteComponent('Note Title', 'Note Body');
        this.page.addChild(note);
        const todo = new TodoComponent('Todo Title', 'Todo Item');
        this.page.addChild(todo);
        const imageBtn = document.querySelector('#new-image');
        imageBtn.onclick = () => {
            imageBtn.addEventListener('click', () => {
                const dialog = new InputDialog();
                dialog.setOnCloseListenr(() => {
                    dialog.removeFrom(document.body);
                });
                dialog.setOnSubmitListenr(() => {
                    dialog.removeFrom(document.body);
                });
                dialog.attachTo(document.body);
            });
        };
    }
}
new App(document.querySelector('.document'));
