import { projects } from '@/pages/projects/Projects'
import { Project, ProjectsState } from '@/types/project'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { bigint } from 'zod'

const initialState: ProjectsState = {
    projects: [],
    loading: false,
    error: null,
    selectedProject: null
}

export const fetchProjects = createAsyncThunk('projects/fetchProjects',
    async () => {
        //simulate api call
        await new Promise(resolve => setTimeout(resolve, 1000));
        return projects
    }
)

export const createProject = createAsyncThunk('projects/createProject',
    async (projectData: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>) => {
        //simulate api call
        await new Promise(resolve => setTimeout(resolve, 1000));
        const newProject: Project = {
            ...projectData,
            id: Date.now().toString(),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        }
        return newProject
    })

const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        updateProject: (state, action: PayloadAction<Project>) => {
            const index = state.projects.findIndex(p => p.id === action.payload.id)
            if (index != -1) {
                state.projects[index] = action.payload;
                if (state.selectedProject && state.selectedProject.id === action.payload.id) {
                    state.selectedProject = action.payload;
                }
            }
        },
        setSelectedProject: (state, action: PayloadAction<Project | null>) => {
            state.selectedProject = action.payload
        },
        updateProjectProgress: (state, action: PayloadAction<{ id: string, progress: number }>) => {
            const project = state.projects.find(p => p.id === action.payload.id);
            if (project) {
                project.progress = action.payload.progress;
                project.updatedAt = new Date().toISOString();
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProjects.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProjects.fulfilled, (state, action) => {
                state.loading = false;
                state.projects = action.payload;
            })
            .addCase(fetchProjects.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch projects';
            })
            .addCase(createProject.fulfilled, (state, action) => {
                state.projects.push(action.payload);
            });
    },
})
export const { updateProject, updateProjectProgress, setSelectedProject } = projectSlice.actions;
export default projectSlice.reducer