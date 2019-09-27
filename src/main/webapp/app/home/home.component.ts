import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { LoginModalService, Principal, Account } from 'app/core';
import { CourseService } from 'app/shared/service/CourseService';
import { CourseDto } from 'app/shared/model/course-dto.model';
import { CourseWithTNDto } from 'app/shared/model/courseWithTN-dto.model';
import { UserCourseDto } from 'app/shared/model/userCourse-dto.model';

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: ['home.css']
})
export class HomeComponent implements OnInit {
    account: Account;
    modalRef: NgbModalRef;
    courseNameNeedToReg: string;
    courseNameNeedToDel: string;
    courseNeedToAdd: CourseDto = new CourseDto();

    constructor(
        private principal: Principal,
        private loginModalService: LoginModalService,
        private eventManager: JhiEventManager,
        private courseService: CourseService
    ) {}

    courses: CourseDto[] = [];
    coursesWithTN: CourseWithTNDto[] = [];
    userCourses: UserCourseDto[] = [];

    ngOnInit() {
        this.principal.identity().then(account => {
            this.account = account;
        });
        this.registerAuthenticationSuccess();
    }

    registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', message => {
            this.principal.identity().then(account => {
                this.account = account;
            });
        });
    }

    isAuthenticated() {
        return this.principal.isAuthenticated();
    }

    login() {
        this.modalRef = this.loginModalService.open();
    }

    getAllCourses() {
        //debugger;
        this.courseService.getCourseInfo().subscribe(curDto => {
            if (!curDto) {
                this.courses = [];
            } else {
                this.courses = curDto;
            }
        });
    }

    // getAllUserCourses() {
    //     //debugger;
    //     this.courseService.getUserCourseInfo().subscribe(curDto => {
    //         if (!curDto) {
    //             this.userCourses = [];
    //         } else {
    //             this.userCourses = curDto;
    //         }
    //     });
    // }

    getAllCoursesWithTN() {
        this.courseService.getCourseInfoWithTN().subscribe(curDto => {
            if (!curDto) {
                this.coursesWithTN = [];
            } else {
                this.coursesWithTN = curDto;
            }
        });
    }

    addCourse() {
        this.courseService.addCourse(this.courseNeedToAdd).subscribe();
        this.courseNeedToAdd = new CourseDto();
    }

    registerCourse() {
        debugger;
        this.courseService.register(this.courseNameNeedToReg).subscribe();
        this.courseNameNeedToReg = '';
        this.clearAllCoursesWithTN();
    }

    deleteCourse() {
        this.courseService.delete(this.courseNameNeedToDel).subscribe();
        this.courseNameNeedToDel = '';
        this.clearAllCoursesWithTN();
    }

    clearAllCourses() {
        this.courses = [];
    }

    clearAllCoursesWithTN() {
        this.coursesWithTN = [];
    }

    // addCourseToStudent() {
    //     const courseName = 'temp';
    //     this.courseService.addCourseToStudent(courseName, currentUserCredential);
    // }
}
