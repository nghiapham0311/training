import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { SkillModel } from '../model/skill.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, AfterViewInit {

  //Table skill
  @ViewChild('skillPaginator') paginatorSkill!: MatPaginator;
  @ViewChild(MatSort) sortSkill!: MatSort;
  displayedColumnsSkill: string[] = ['name', 'description', 'action'];
  dataSourceSkill!: MatTableDataSource<SkillModel>;

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

  createNewSkill(id: number): SkillModel {
    return {
      id: id.toString(),
      name: 'Java ' + id,
      description: 'Description ' + id
    };
  }

  addNewSkill(){
    
  }

}
