import { PING, default as actions } from "./actions";
import { ofType } from 'redux-observable';
import { mapTo, delay, map } from 'rxjs/operators';
import getPosts from "./services";
const pingEpic = action$ => action$.pipe(
    ofType(PING),
    getPosts,
    map(resp => console.log('resp: ', resp)),
    mapTo(actions.doPong())
);

export default pingEpic;