package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Course;
import com.mycompany.myapp.domain.dto.CourseDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

//@Repository
public interface UserCourseRepository extends JpaRepository<Course, Long> {
    @Query("SELECT new com.my.company.myapp.domain.dto.CourseDto(c.courseName, c.courseLocation, c.courseContent, u.login) from Course c left join User u on c.teacherId = u.id where u.id =: userID")
    List<CourseDto> findAllByUser(@Param("userId") long userId);

//    @Query("SELECT Course FROM course c  WHERE c.name = :courseName")
//    Course findCourseByCourseName(@Param("courseName") String courseName);
}
