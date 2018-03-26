export const FILTER_COURSES:string = 'courses/FILTER';

export function filterCourses(searchText:string) {
    return {
        type: FILTER_COURSES,
        searchText
    };
}