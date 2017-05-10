import expect from 'expect';
import courseReducer from './CourseReducer';
import * as actions from  '../actions/CourseActions';

describe('Course Reducer',()=>{
    it('should add course when passed create_course_success',()=>{
        //arrange
        const initialState = [
            {title : 'A'},
            {title : 'B'}
        ];
        const newCourse = {title : 'C'};
        const action = actions.createCourseSuccess(newCourse);
        //act
        const newState = courseReducer(initialState,action);
        //assert
        expect(newState.length).toEqual(3);
        expect(newState[0].title).toEqual('A');
        expect(newState[1].title).toEqual('B');
        expect(newState[2].title).toEqual('C');
    });
});