package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.UserCourse;
import com.mycompany.myapp.domain.dto.UserCourseDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

//@Repository
public interface UserCourseRepository extends JpaRepository<UserCourse, Long> {
//    @Query("SELECT new com.my.company.myapp.domain.dto.UserCourseDto(uc.course, uc.user) from UserCourse uc left join User u on uc.user.id = u.id")
//    List<UserCourse> findAllByUser();
}
