import { Component, OnInit, OnDestroy } from '@angular/core';
import { GighyService } from "../services/gighy.service";
import { Inputdatagighy } from "./inputdatagighy";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnDestroy {
  
  gighy: Inputdatagighy[];
  Error: string;
  search: string;
  sub : Subscription;
  constructor(private gighyService: GighyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.search = "car"
    
    this.sub=this.route.params.subscribe((Params:Params)=>{
     if (Params["id"] !== undefined){
      this.search=Params["id"];
     }
      this.get_by_search(this.search);
      
    });
  
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  get_by_search(search){
      this.gighyService.get_gighy_by_search(search).subscribe((gighy)=>{
         this.gighy=gighy;
         console.log(this.gighy);
      },(Error)=>{
        this.Error=<any>Error;
      })
  }

}
