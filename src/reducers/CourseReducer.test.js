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
    it('should update course when passed update_course_success',()=>{
        //arrange
        const initialState = [
            { id : 'A',title : 'A'},
            { id : 'B',title : 'B'},
            { id : 'C',title : 'C'}
        ];
        const course = {id : 'B', title : 'New Title'};
        const action = actions.updateCourseSuccess(course);
        //act
        const newState = courseReducer(initialState,action);
        const updatedCourse= newState.find(c=>c.id==course.id);
        const untouchedCourse= newState.find(c=>c.id=='A');
        //assert
        expect(newState.length).toEqual(3);
        expect(updatedCourse.title).toEqual('New Title');
        expect(untouchedCourse.title).toEqual('A');
    });
});