package sit.int221.sas.entities;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import java.time.ZonedDateTime;

@Entity
@Data
@Table(name = "announcements")
public class Announcement {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    @Column(name = "announcementId")
    private Integer id;

    @Column(nullable = false, length = 200)
    private String announcementTitle;

    @Column(nullable = false, length = 10000)
    private String announcementDescription;

    @ManyToOne
    @JoinColumn(name = "categoryId")
    private Category announcementCategory;

    private ZonedDateTime publishDate;

    private ZonedDateTime closeDate;

    @Column(columnDefinition = "ENUM('N','Y')")
    @Enumerated(EnumType.STRING)
    private Display announcementDisplay = Display.N;
}

enum Display {
    N,
    Y
}