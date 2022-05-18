import { Mandatory } from "./required";

export interface Course{
    id: number,
    course_name: string,
    credits: number,
    maximum_students: number,
    teacher_id: number,
    required: string,
    followers: number,
    curriculum_id: number
}