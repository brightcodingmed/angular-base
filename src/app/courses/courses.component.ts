import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  image = "https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  
  displayForm = false;

  selectedIndex = -1;
  editable = false;
  index = 0;
  myCourse = {
    id: 0,
    label: '',
    description: '',
    price: 0,
    publishedDate: new Date(),
    status: true,
    vote: { like: 0, disLike: 0 },
    image: ''
  };
  courses = [
    {image: `http://lorempixel.com/400/200/sports/${this.index++}`, vote: { like: 100, disLike: 3 }, id: 1, label: 'angular', description: 'Lorem ipsum dolor sit amet.', price: 123.23676, publishedDate: new Date(), status: true},
    {image: `http://lorempixel.com/400/200/sports/${this.index++}`, vote: { like: 2, disLike: 10 }, id: 2, label: 'reactJS', description: 'Lorem ipsum dolor sit amet.', price: 23.8, publishedDate: new Date(), status: true},
    {image: `http://lorempixel.com/400/200/sports/${this.index++}`, vote: { like: 21, disLike: 6 }, id: 3, label: 'vueJS', description: 'Lorem ipsum dolor sit amet.', price: 79.95673, publishedDate: new Date(), status: true},
    {image: `http://lorempixel.com/400/200/sports/${this.index++}`, vote: { like: 55, disLike: 5 }, id: 4, label: 'laravel', description: 'Lorem ipsum dolor sit amet.', price: 212.4905, publishedDate: new Date(), status: true},
    {image: `http://lorempixel.com/400/200/sports/${this.index++}`, vote: { like: 45, disLike: 0 }, id: 5, label: 'symfony micro services', description: 'Lorem ipsum dolor sit amet.', price: 100.21278, publishedDate: new Date(), status: true},
  ];

  constructor() { }

  ngOnInit() {
  }

  addCourse() {
    // this.courses.push(this.myCourse);
    this.courses = [this.myCourse, ...this.courses];
    this.initCourse();
  }

  deleteCourse(id) {
    
    Swal.fire({
      title: 'delete course?',
      text: 'Are you sure to delete this item ?',
      type: 'question',
      showCancelButton: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {

        this.courses = this.courses.filter((course) => course.id != id)

        Swal.fire({
          title: 'delete course?',
          text: 'Are you sure to delete this item ?',
          type: 'success',
          timer: 5000
        })
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } 
    })

    
  }

  editCourse(course, index) {
    this.selectedIndex = index;
    this.myCourse = course;
    this.editable = true;
  }

  updateCourse() {
    this.editable = false;
    this.courses[this.selectedIndex] = this.myCourse;
    this.initCourse()
  }

  initCourse() {
    this.myCourse = {
      id: 0,
      label: '',
      description: '',
      price: 0,
      publishedDate: new Date(),
      status: true,
      vote: { like: 0, disLike: 0 },
      image: ''
    };
  }

  changeStatus(course) {
    course.status = !course.status;
  }

  toggle() {
   this.displayForm = !this.displayForm
  }

  receiveVote(data, course) {
    if(data.type == 'like') {
      course.vote.like = data.value
    }else {
      course.vote.disLike = data.value
    }
    
  }
 

}
