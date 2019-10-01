package com.mycompany.myapp.domain.dto;

import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor

public interface CourseDto {

    private String courseName;

    private String courseLocation;

    private String courseContent;

    private long teacherId;
}
