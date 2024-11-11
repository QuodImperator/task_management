export interface Task {
    id?: number;
    title: string;
    description: string;
    status: string;
    priority: string;
    createdDate?: Date;
    dueDate?: Date;
}