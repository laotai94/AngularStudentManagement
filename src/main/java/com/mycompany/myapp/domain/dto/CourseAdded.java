package com.mycompany.myapp.domain.dto;
import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class CourseAdded implements CourseDto {
    private String courseName;

    private String courseLocation;

    private String courseContent;

    private long teacherId;
}
