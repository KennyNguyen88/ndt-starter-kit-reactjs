//action types
export const SAY_HI = 'SAY_HI';

//actions
export function sayHi() {

    let testVar = 'Hello from app';

    return {
        type: SAY_HI,
        payload: testVar
    }

}