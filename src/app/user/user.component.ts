import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ProjectModel } from '../model/project.model';
import { SkillEvaluationModel } from '../model/skill-evaluation.model';
import { EditUserDialogComponent } from './edit-user-dialog/edit-user-dialog.component';
import { UserModel } from '../model/user.model';
import { OAuthService } from 'angular-oauth2-oidc';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, AfterViewInit {
  currentUser: UserModel = new UserModel;
  currentUserName: string = 'User Name';
  //Table project
  @ViewChild('projectPaginator') paginatorProject!: MatPaginator;
  @ViewChild(MatSort) sortProject!: MatSort;
  displayedColumnsProject: string[] = ['name', 'role', 'tags', 'description'];
  dataSourceProject: MatTableDataSource<ProjectModel> = new MatTableDataSource();
  //Table skill
  @ViewChild('skillPaginator') paginatorSkill!: MatPaginator;
  @ViewChild(MatSort) sortSkill!: MatSort;
  displayedColumnsSkill: string[] = ['skill', 'yearExperience', 'level', 'details'];
  dataSourceSkill: MatTableDataSource<SkillEvaluationModel> = new MatTableDataSource();

  constructor(
    public dialog: MatDialog,
    private oAuthService: OAuthService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUserClaims();
    this.fetchUserInfo();
    this.getAvatar();
  }

  buildData() {
    // Assign the data to the data source for the table to render
    this.dataSourceProject = new MatTableDataSource(this.currentUser.projects);
    this.dataSourceSkill = new MatTableDataSource(this.currentUser.skills);
  }

  getUserClaims() {
    const claims = this.oAuthService.getIdentityClaims();
    if (claims && claims['displayname'])
    this.currentUserName = claims['displayname'] as string;
  }

  fetchUserInfo() {
    this.userService.getCurrentuserProfile().subscribe({
      next: (res: any) => {
        console.log('res ', res);
        this.currentUser = res;
        this.buildData();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getAvatar(){
    this.userService.getAvatar().subscribe({
      next: (res: any) => {
        console.log('getAvatar res ', res);
        if(res.data){
          console.log('Change avatar');
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngAfterViewInit() {
    this.dataSourceProject.paginator = this.paginatorProject;
    this.dataSourceProject.sort = this.sortProject;
    this.dataSourceSkill.paginator = this.paginatorSkill;
    this.dataSourceSkill.sort = this.sortSkill;
  }

  applyFilterProject(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceProject.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceProject.paginator) {
      this.dataSourceProject.paginator.firstPage();
    }
  }

  applyFilterSkill(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceSkill.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceSkill.paginator) {
      this.dataSourceSkill.paginator.firstPage();
    }
  }

  createNewProject(id: number): ProjectModel {
    return {
      id: id.toString(),
      projectName: 'Project name ' + id,
      role: 'Developer',
      tags: [{ id: '1', name: 'Azure' }, { id: '2', name: 'MSA' }],
      description: 'Description ' + id
    };
  }

  createNewSkill(id: number): SkillEvaluationModel {
    return {
      id: id.toString(),
      skill: [{ id: '1', name: 'Java', description: '' }, { id: '2', name: 'Angular', description: '' },],
      details: 'Detail ' + id,
      userId: 'tuu2hc',
      yearExperience: '3',
      createdAt: new Date,
      modifiedAt: new Date,
      createBy: 'tuu2hc',
      modifiedBy: 'tuu2hc'
    };
  }

  editUserInfo() {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      width: '35vw',
      height: '80vh',
      data: { currentUser: this.currentUser, currentUserName: this.currentUserName},
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
