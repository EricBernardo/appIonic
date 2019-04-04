import { Component, OnInit } from '@angular/core';
import { LeadsService } from 'src/app/services/leads.service';

@Component({
	selector: 'app-leads',
	templateUrl: './leads.page.html',
	styleUrls: ['./leads.page.scss'],
})
export class LeadsPage implements OnInit {

	leads = [];
	page: number = 0;

	constructor(private leadsService: LeadsService) { }

	ngOnInit() {
		this.getLeads(null);
	}

	getLeads(event) {
		this.page += 1;
		this.getAllLeads(this.page, event);
	}

	getAllLeads(page: number, event: any) {

		this.leadsService.getAll(page).subscribe((result) => {

			for (let index = 0; index < result['data'].length; index++) {
				this.leads.push(result['data'][index]);
			}

			if (event) {

				event.target.complete();

				if (this.leads.length == result['data']['total']) {
					event.target.disabled = true;
				}

			}

		});
	}

}
