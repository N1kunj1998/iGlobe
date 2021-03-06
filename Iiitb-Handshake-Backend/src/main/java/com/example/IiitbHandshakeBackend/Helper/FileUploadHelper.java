package com.example.IiitbHandshakeBackend.Helper;

import com.example.IiitbHandshakeBackend.IiitbHandshakeBackendApplication;
import org.apache.tomcat.util.http.fileupload.FileUtils;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.*;

@Component
public class FileUploadHelper {
    //public final String UPLOAD_DIR = (new ClassPathResource("static/image")).getFile().getAbsolutePath();
//    public final String UPLOAD_DIR = "/home/nikunj/Documents/iiitb-handshake/Iiitb-Handshake-Backend/src/main/resources/static/image";
    public FileUploadHelper() throws IOException {
//        Path Upload_Dir = Paths.get("static/image/").toAbsolutePath();
//        System.out.println(Upload_Dir);
//        File file  = new File(UPLOAD_DIR);
//        if(!file.exists()){
//            file.mkdir();
//        }
        try {
//            System.out.println(IiitbHandshakeBackendApplication.class.getClassLoader().getResource("static/image").getPath());
            Path Upload_Dir = Paths.get("").toAbsolutePath();
//            System.out.println(Upload_Dir);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public boolean uploadFile(MultipartFile multipartFile, String key) throws  IOException{
        boolean flag = false;



        Path Upload_Dir = Paths.get("").toAbsolutePath();
        try(InputStream inputStream = multipartFile.getInputStream()){
            Path filePath = Upload_Dir.resolve(multipartFile.getOriginalFilename());
            Files.copy(inputStream, Paths.get(Upload_Dir + File.separator + key +multipartFile.getOriginalFilename()), new CopyOption[]{StandardCopyOption.REPLACE_EXISTING});
            flag = true;
        }catch (IOException ioe){
            throw new IOException("Error saving uploaded file : " + multipartFile.getOriginalFilename(), ioe);
        }



//        try {
//            Files.copy(multipartFile.getInputStream(), Paths.get(this.UPLOAD_DIR + File.separator + key +multipartFile.getOriginalFilename()), new CopyOption[]{StandardCopyOption.REPLACE_EXISTING});
//            flag = true;
//        } catch (Exception var4) {
//            var4.printStackTrace();
//        }

        return flag;
    }

//    @GetMapping("/{filename}")
//    public ResponseEntity<byte[]> getImage(@PathVariable("filename") String filename) {
//        byte[] image = new byte[0];
//        try {
//            image = FileUtils.readFileToByteArray(new File(UPLOAD_DIR+filename));
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//        return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(image);
//    }
}
