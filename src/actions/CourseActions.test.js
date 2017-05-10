import expect from 'expect';
import * as courseActions from  './CourseActions';
import * as types from  './ActionTypes';

//test a sync action
describe('Course Actions', ()=>{
    describe('createCourseSccess', ()=>{
        it('should create a create_course_success action',()=>{
            //arrange 
            const course = { id : 'clean-code' , title : 'Clean Code'} ;
            const expectedAction = {
                type : types.CREATE_COURSE_SUCCESS,
                course : course
            };
            //act
            const action =  courseActions.createCourseSuccess(course);
            //assert
            expect(action).toEqual(expectedAction);
        });
    });
});