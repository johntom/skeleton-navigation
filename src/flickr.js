import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Gallery3{
  heading = 'Flickr';
  images = [];
  selectedImage='';
  url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=rainier&tagmode=any&format=json';
    constructor(http){
    this.http = http;
  }

  loadimage(img) {
    //alert('i '+img);
    this.selectedImage = img;
  }
  changeGallery() {
    alert('cg')

  }
  activate(){
    return this.http.jsonp(this.url).then(response => {
      this.images = response.content.items;
  });

}

canDeactivate(){
  return confirm('Are you sure you want to leave?');
}
}
