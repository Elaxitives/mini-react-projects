import { createMachine } from "xstate";


const myMachine = createMachine({
    initial: "notHovered",
    states: {
        notHovered: {},
        hovered: {}
    }
})