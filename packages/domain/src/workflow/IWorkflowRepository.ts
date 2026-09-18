export interface IWorkflowRepository {
  save(workflow: any): Promise<void>;
  findBy(id: any): Promise<any>;
}
