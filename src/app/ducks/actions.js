//action types
export const SAY_HI = 'app/SAY_HI';
export const SAY_YEAH = 'app/SAY_YEAH';

//actions
const sayHi = () => {

    let hello = 'Hello from app';

    return {
        type: SAY_HI,
        payload: hello
    }

};

const sayYeah = () => {
    let yeah = "Say Yeah from app";

    return {
        type: SAY_YEAH,
        payload: yeah
    }
};

export default {
    sayHi,
    sayYeah
};