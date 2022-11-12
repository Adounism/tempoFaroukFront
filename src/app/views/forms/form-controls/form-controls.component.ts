import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { OperationsService } from 'src/app/services/operations.service';

@Component({
  selector: 'app-form-controls',
  templateUrl: './form-controls.component.html',
  styleUrls: ['./form-controls.component.scss']
})
export class FormControlsComponent {

  historiqueData: any[]=[];
  transactionData: any[]=[];
  customerId! :number;
  searchText ='';
  listOperation:any[]=[];
  listUserOperation:any[]=[];

  operationTotal = 0;
  userTransactionData:any[]=[];

  page: number = 1;
  total: number = 0;
  constructor(private clienService: ClientService, private route: ActivatedRoute,
    private router: Router,private  operationService: OperationsService, ) {
   
  }
  ngOnInit(): void {

    this.getCustomerData();
    this.getAllOperation();
    
  }

  
  getAllOperation(){
    this.operationService.getAllOperations().subscribe(response=>{
      this.listOperation = response;
    })
  }


  getCustomerData(){
    this.clienService.getAllClientPage(this.page).subscribe(async data=>{
      // console.log(data.transactions);
    
      this.historiqueData = data;
      
       this.historiqueData.map(op=>{

        this.listUserOperation = op.transactions;
        console.log(this.listUserOperation);
        
        
       });
      

      let operations: any= {};
     await this.listUserOperation.forEach((element, index )=> {
        console.log(element);
        
        let key = element["operation"]["name"];
        console.log(element.transactions[index].operation);
        
        if(element.transactions[index].operation.name == 'retrait'){
          operations[key] += element.transactions[index].operation.amount;
          console.log(operations[key]);
          
        }else{
          operations[key] += element.transactions[index].operation.amount;
          console.log(operations[key]);
        }

        
      });

    })
  }

  
}
