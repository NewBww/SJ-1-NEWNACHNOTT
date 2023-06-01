package sit.int221.sas.controllers;

import jakarta.validation.*;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sit.int221.sas.dtos.*;
import sit.int221.sas.entities.Announcement;
import sit.int221.sas.services.AnnouncementService;
import sit.int221.sas.utils.ListMapper;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:5173/", "http://localhost:4173/", "http://ip22sj1.sit.kmutt.ac.th/", "http://intproj22.sit.kmutt.ac.th/sj1/"})
@RestController
@RequestMapping("/api/announcements")
public class AnnouncementController {
    @Autowired
    private AnnouncementService announcementService;
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private ListMapper listMapper;

    @GetMapping
    public ResponseEntity<List<AnnouncementListItemDTO>> getAllAnnouncements(@RequestParam(defaultValue = "admin") String mode) {
        List<AnnouncementListItemDTO> announcementList = listMapper.mapList(announcementService.findAll(mode), AnnouncementListItemDTO.class, modelMapper);
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
    public ResponseEntity<DetailedAnnouncementDTO> getAnnouncementById(
            @PathVariable Integer id,
            @RequestParam(defaultValue = "false", required = false) boolean count) {
        DetailedAnnouncementDTO announcement = modelMapper.map(announcementService.findById(id, count), DetailedAnnouncementDTO.class);
        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.set("Content-Type", "application/json");
        responseHeaders.set("Description", "get an announcement successfully");
        return ResponseEntity.ok().headers(responseHeaders).body(announcement);
    }

    @GetMapping("pages")
    public ResponseEntity<PageDTO<AnnouncementListItemDTO>> getAnnouncementPage(
            @RequestParam(defaultValue = "admin") String mode,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size,
            @RequestParam(required = false) Integer category
    ) {
        Page<Announcement> announcementPage = announcementService.findPage(mode, page, size, category);
        PageDTO<AnnouncementListItemDTO> announcementPageDTO = listMapper.toPageDTO(announcementPage, AnnouncementListItemDTO.class, modelMapper);
        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.set("Content-Type", "application/json");
        return ResponseEntity.ok().headers(responseHeaders).body(announcementPageDTO);
    }

    @PostMapping
    public ResponseEntity<ResponseAnnouncementDTO> postAnnouncement(@RequestBody @Valid RequestAnnouncementDTO requestAnnouncementDTO) {
        Announcement announcement = modelMapper.map(requestAnnouncementDTO, Announcement.class);
        announcement = announcementService.createAnnouncement(announcement);
        ResponseAnnouncementDTO responseAnnouncementDTO = modelMapper.map(announcement, ResponseAnnouncementDTO.class);
        HttpHeaders response = new HttpHeaders();
        response.set("Content-Type", "application/json");
        response.set("Description", "an announcement item created");
        return ResponseEntity.ok().headers(response).body(responseAnnouncementDTO);
    }

    @PutMapping("{id}")
    public ResponseEntity<ResponseAnnouncementDTO> updateAnnouncement(@PathVariable Integer id, @RequestBody @Valid RequestAnnouncementDTO requestedAnnouncement) {
        Announcement announcement = modelMapper.map(requestedAnnouncement, Announcement.class);
        announcement = announcementService.updateAnnouncement(id, announcement);
        ResponseAnnouncementDTO responseAnnouncementDTO = modelMapper.map(announcement, ResponseAnnouncementDTO.class);
        HttpHeaders response = new HttpHeaders();
        response.set("Content-Type", "application/json");
        response.set("Description", "Update the announcement successfully");
        return ResponseEntity.ok().headers(response).body(responseAnnouncementDTO);
    }

    @DeleteMapping("{id}")
    public void deleteAnnouncement(@PathVariable Integer id) {
        announcementService.removeAnnouncement(id);
    }
}

