
export interface Project {
    id: string;
    name: string;
    description: string;
    status: 'active' | 'completed' | 'on-hold' | 'cancelled';
    priority: 'low' | 'medium' | 'high' | 'critical';
    startDate: string;
    endDate: string;
    progress: number;
    teamMembers: string[];
    budget: number;
    spent: number;
    createdAt: string;
    updatedAt: string;
}

export interface ProjectsState {
    projects: Project[];
    loading: boolean;
    error: string | null;
    selectedProject: Project | null;
}

export interface ProjectCardProps {
    project: Project;
    onEdit?: (project: Project) => void;
    onDelete?: (id: string) => void;

}

export interface ProjectFormProps {
    project?: Project;
    onSubmit: (projectData: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>) => void;
    onCancel: () => void;
}
