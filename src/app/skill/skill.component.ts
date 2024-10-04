import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { SkillEvaluationModel } from '../model/skill-evaluation.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit, AfterViewInit {

  //Table skill
  @ViewChild('skillPaginator') paginatorSkill!: MatPaginator;
  @ViewChild(MatSort) sortSkill!: MatSort;
  displayedColumnsSkill: string[] = ['skill', 'yearExperience', 'level', 'details'];
  dataSourceSkill!: MatTableDataSource<SkillEvaluationModel>;

  constructor() { }

  ngOnInit(): void {
    this.buildData();
  }

  buildData(){
    // Create 10 skill evaluation
    const skills = Array.from({length: 10}, (_, k) => this.createNewSkill(k + 1));
    // Assign the data to the data source for the table to render
    this.dataSourceSkill = new MatTableDataSource(skills);
  }

  ngAfterViewInit() {
    this.dataSourceSkill.paginator = this.paginatorSkill;
    this.dataSourceSkill.sort = this.sortSkill;
  }

  applyFilterSkill(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceSkill.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceSkill.paginator) {
      this.dataSourceSkill.paginator.firstPage();
    }
  }

  createNewSkill(id: number): SkillEvaluationModel {
    return {
      id: id.toString(),
      skill: [{ id: '1', name: 'Java', description: '' }, { id: '2', name: 'Angular', description: '' },],
      details: 'Detail ' + id,
      userId: 'userId',
      yearExperience: '3',
      createdAt: new Date,
      modifiedAt: new Date,
      createBy: 'userId',
      modifiedBy: 'userId'
    };
  }

  saveSkills(){
    
  }

}
