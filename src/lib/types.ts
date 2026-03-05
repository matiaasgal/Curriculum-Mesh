export type ClassId = string;

export type ClassInfo = {
    id: ClassId;
    displayName: string;
    isApproved: boolean;
    requirements: ClassId[];
}

export type Semester = {
    id: number;
    displayName: string;
    classes: ClassInfo[];
}

export type Curriculum = {
    totalSemesters: number;
    semesters: Semester[];
}