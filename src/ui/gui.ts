import MainMenu from "./mainMenu";

export enum GuiComponentType {
    MainMenu
}

export default abstract class GuiComponent {
    /**
     * Draw and display the output of the component.
     */
    abstract draw(): void;

    /**
     * Clear the output of the component.
     */
    public clear(): void {
        //
    }
}

export abstract class Gui {
    protected static readonly components: Map<GuiComponentType, GuiComponent> = new Map([
        [GuiComponentType.MainMenu, new MainMenu()]
    ]);

    /**
     * The currently active component displaying
     * in the console. Initially the main menu.
     */
    protected static active: GuiComponent = Gui.components.get(GuiComponentType.MainMenu)!;

    /**
     * Render the currently active component to the
     * console.
     */
    public static render(): void {
        // Clear the active element.
        this.active.clear();

        // Clear the console.
        console.clear();

        // Draw the active element.
        this.active.draw();
    }

    /**
     * Set the active component to draw, and overwrite the currently
     * active one if applicable.
     */
    public static setActive(type: GuiComponentType): void {
        if (!Gui.components.has(type)) {
            throw new Error("The specified component type is invalid");
        }

        this.active = Gui.components.get(type)!;
    }
}
