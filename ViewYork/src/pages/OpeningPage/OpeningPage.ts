import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import {visited} from '../visited/visited'
import {Camera, CameraOptions} from '@ionic-native/camera';
import {HTTP} from '@ionic-native/HTTP';
import { File } from '@ionic-native/file';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';


import {Askuser} from '../Askuser/Askuser';

declare var cordova: any;

@Component({
  selector: 'page-OpeningPage',
  templateUrl: 'OpeningPage.html'
})
export class OpeningPage {
items: any;
images: Array<{src: String}>;
lastImage: string = null;
public photo: any;
public base64Image: string;
constructor(public navCtrl: NavController, private camera: Camera, private http: HTTP, private file: File, public toastCtrl: ToastController, private transfer: FileTransfer) {
  this.images = [];
}

  showvisited() {
      this.navCtrl.push(visited);
  }

  ngOnInit(){
    this.photo = []
  }

  private copyFileToLocalDir(namePath, currentName, newFileName) {
  	  this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
  	    this.lastImage = newFileName;
  	  }, error => {
  	    this.presentToast('Error while storing file.');
  	  });
  	}

  takePhoto() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.photo.push(base64Image);
      this.photo.reverse();
      }, (err) => {
      //Handle error
      });
      this.camera.getPicture(options).then((imagePath) => {
  		     // imageData is either a base64 encoded string or a file URI
  		     // If it's base64:
       		//let base64Image = 'data:image/jpeg;base64,' + imageData;
       		// this.filePath.resolveNativePath('../../www/img')
       			//.then(filePath => {
       		var currentName = imagePath.substr(imagePath.lastIndexOf('/')+1);
       		var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/')+1);
          (function() {
          function execute(rqst, q, fwk) {
              console.log('called api')
              var uploadedFile = rqst.files['image'];
              console.log(rqst.files['image']);
              var newId = fwk.uuid.v4();
              console.log('.........', rqst);
              if (rqst.body.data) {
              var image_type = rqst.body.data;
              } else {
              var image_type = rqst.body.image_type;
              }
              console.log('type', image_type, newId);
              if (image_type && uploadedFile) {
              if (!uploadedFile.extension) {
              uploadedFile.extension = "png";
              console.log('not ex');
              }
              var newPath = "images/food-images" + "/" + newId + '.' + uploadedFile.extension;
              fwk.getAwsS3Client(function(err, awsS3Client) {
                  var params = {
                  localFile: uploadedFile.path,
                  s3Params: {
                    Bucket: fwk.config.awsS3.bucketName,
                    Key: newPath,
                    },
                    };
                  var uploader = awsS3Client.uploadFile(params);
                  uploader.on('error', function(err) {
                  console.error('Unable to upload' + image_type + 'photo:' + err.toString());
                  q.resolve({
                    status: 200,
                    data: {
                        code: 1,
                        error_message: 'Unable to upload' + image_type + 'photo.'
                        }
                        });
                        });
                  uploader.on('progress', function() {
                  console.log(uploader.progressAmount);
                  });
                  uploader.on('end', function() {
                  console.log("upload" + image_type + "photo done.");
                  fwk.getAwsS3PublicUrl(newPath, function(err) {
                  if (err) {
                        console.error('Error getting public url: ' + err.toString());
                        q.resolve({
                            status: 200,
                            data: {
                                code: 1,
                                error_message: 'Error getting public url.'
                            }
                        });
                    } else {
                        // console.log('ho gya upload',newPath, viewyorkpic.s3.amazonaws.com)
                        q.resolve({
                            status: 200,
                            data: {
                                code: 0,
                                photo_url: newPath,
                                public_photo_url: viewyorkpic.s3.amazonaws.com
                            }
                        });
                    }
                })
            });
        });
    } else {
        console.error('Error key parameter missing');
        q.resolve({
            status: 200,
            data: {
                code: 1,
                error_message: 'Error Missing required key in params.'
            }
        });
    }
}
  })();
       		this.copyFileToLocalDir(correctPath,currentName,this.createFileName());
       	}, (err) => {
       		this.presentToast('Error');
       	});
      this.navCtrl.push(Askuser)
      }
  // Create a new name for the image
  	private createFileName() {
  	  var d = new Date(),
  	  n = d.getTime(),
  	  newFileName =  n + ".jpg";
  	  return newFileName;
  	}


  	private presentToast(text) {
  	  let toast = this.toastCtrl.create({
  	    message: text,
  	    duration: 3000,
  	    position: 'top'
  	  });
  	  toast.present();
  	}

  	// Always get the accurate path to your apps folder
  	public pathForImage(img) {
  	  if (img === null) {
  	    return '';
  	  } else {
  	    return cordova.file.dataDirectory + img;
  	  }
  	}
  }
