import { Component, OnInit } from '@angular/core';
import { LikeService } from './like.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: Array<Object>;

  constructor(private likeService: LikeService) { }

  ngOnInit() {
    this.news = [
      { id: '1', title: 'Tim sa RAF-a najbolji na FON Hakatonu', date: 'April 3rd 2018', content: 'U Beogradu je 31. marta i 1. aprila održan je peti po redu „FON Hakaton“, dvadesetčetvoročasovno takmičenje u programiranju.Prvo mesto na hakatonu čija je tema bila „Analiza Big Data podataka“ osvojila je ekipa „RAFx“ koju čine studenti druge godine Računarskog fakulteta: Vanja Paunović, Mihailo Vignjević, Branko Fulurija i Miloš Milunović. Ovaj tradicionalni projekat se održava u saradnji sa „Istraživačko- razvojnim centrom“ Fakulteta organizacionih nauka.' },
      { id: '2', title: 'Branko Fulurija osvojio bronzu na informatičkoj Balkanijadi.', date: 'July 2nd 2016', content: 'Branko Fulurija iz Višegrada osvojio je bronzanu medalju na informatičkoj Balkanijadi, koja je održana na Kipru i time osvojio najbolji plasman takmičara iz BiH. Fulurija se plasirao na svjetsko takmičenje iz informatike koje će biti održano u Kazanju u Rusiji krajem avgusta. Branko Fulurija je prošle godine postao prvak Republike Srpske u informatici, a na takmičenju BiH u Sarajevu jedini je predstavnik Srpske koji je ostvario dalji plasman na Olimpijadu i Balkanijadu.' },
      { id: '3', title: 'Branko Fulurija plasirao se na Informatičku olimpijadu.', date: 'June 11th 2016', content: 'Maturant Srednje škole „Ivo Andrić“ iz Višegrada Branko Fulurija osvojio je danas drugo mjesto na takmičenju iz informatike u Sarajevu i plasirao se na Informatičku olimpijadu i Balkanijadu. Fulurija je u aprilu prošle godine postao prvak Republike Srpske u informatici, a na današnjem takmičenju na nivou BiH bio je jedini predstavnik Srpske koji se plasirao na Olimpijadu. Informatička olimpijada biće održana u avgustu u Rusiji, a Balkanijada krajem juna na Kipru.' },
      { id: '4', title: 'Branko Fulurija se plasirao na republičko takmičenje iz informatike.', date: 'March 20th 2016', content: 'Srednjoškolac Branko Fulurija iz Višegrada osvojio je prvo mjesto na regionalnom takmičenju iz informatike koje je održano u ovom gradu i plasirao se na republičko takmičenje zakazano za 23. april. Drugo mjesto pripalo je Dimitriju Glibiću iz Višegrada, a treće Milici Škipini iz Foče. Republički inspektor za informatiku Aleksandra Stanković rekla je Srni da je zadovoljna organizacijom takmičenja.' }
    ];
  }

  toggleLike(id: string): void {
    this.likeService.toggleLike(id);
  }

  doLike(id: string): boolean {
    return this.likeService.doLike(id);
  }

}
