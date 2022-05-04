import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { APIResponse, Game } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public sort: any;
  public games: Array<Game> = [];
  constructor(private httpService: HttpService,
    private router: Router,
    private activedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRouter.params.subscribe((params: Params) => {
      if (params['game-search']) {
        this.searchGames('metacrit', params['game-search']);
      }
      else {
        this.searchGames('metacrit');
      }
    })
  }
  searchGames(sort: string, search?: string): void {
    this.httpService.getGameList(sort, search)
      .subscribe((gameList: APIResponse<Game>) => {
        this.games = gameList.results;
      });
  }

  openGameDetails(id: number) {
    this.router.navigate(['details', id]);
  }
  ngOnDestroy(): void {

  }
}
