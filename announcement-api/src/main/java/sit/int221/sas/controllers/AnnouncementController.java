package sit.int221.sas.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sit.int221.sas.dtos.AnnouncementDTO;
import sit.int221.sas.dtos.DetailedAnnouncementDTO;
import sit.int221.sas.entities.Announcement;
import sit.int221.sas.services.AnnouncementService;
import sit.int221.sas.utils.ListMapper;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:5173/", "http://localhost:4173/", "http://ip22sj1.sit.kmutt.ac.th/"})
@RestController
@RequestMapping("/api/announcements")
public class AnnouncementController {
    @Autowired
    private AnnouncementService service;
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private ListMapper listMapper;

    @GetMapping
    public ResponseEntity<List<AnnouncementDTO>> getAllAnnouncements() {
        List<AnnouncementDTO> announcementList = listMapper.mapList(service.findAll(), AnnouncementDTO.class, modelMapper);
        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.set("Content-Type", "application/json");
        if (announcementList.isEmpty()) {
            responseHeaders.set("Description", "no announcement data");
        } else {
            responseHeaders.set("Description", "get all announcements successfully");
        }

        return ResponseEntity.ok().headers(responseHeaders).body(announcementList);
    }

    @GetMapping("{id}")
    public ResponseEntity<DetailedAnnouncementDTO> getAnnouncementById(@PathVariable Integer id) {
        DetailedAnnouncementDTO announcement = modelMapper.map(service.findById(id), DetailedAnnouncementDTO.class);
        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.set("Content-Type", "application/json");
        responseHeaders.set("Description", "get an announcement successfully");
        return ResponseEntity.ok().headers(responseHeaders).body(announcement);
    }

//    @PostMapping
//    public Announcement postAnnouncement(@RequestBody Announcement announcement) {
//        System.out.println(announcement);
//        return service.createAnnouncement(announcement);
//    }
//
//    @PutMapping("{id}")
//    public Announcement updateAnnouncement(@PathVariable Integer id, @RequestBody Announcement announcement) {
//        return service.updateAnnouncement(announcement, id);
//    }
//
//    @DeleteMapping("{id}")
//    public void deleteAnnouncement(@PathVariable Integer id) {
//        service.removeAnnouncement(id);
//    }
}

