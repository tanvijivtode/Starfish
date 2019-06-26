import { Option } from 'src/app/objects/option'

export class Question {
    question: string;
    options: Option[];
    responses?: string[];
    inputType: string;
}