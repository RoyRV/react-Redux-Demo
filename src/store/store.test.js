import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initiaState from '../reducers/initialState';
import * as courseActions from  '../actions/CourseActions';

describe('Store', ()=>{
    it('should handle createing courses', ()=>{
        //arrange
        const store = createStore(rootReducer,initiaState);
        const course = {
            title : "Clean Code"
        };
        //act
        const action = courseActions.createCourseSuccess(course);
        store.dispatch(action);
        //assert 
        const actual = store.getState().courses[0];
        const expected = {
            title : "Clean Code"
        };
        expect(actual).toEqual(expected);
    });
});