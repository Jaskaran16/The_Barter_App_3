import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'
export default class ThingRequestScreen extends Component{
    constructor(){
     super();
     this.state={
         userId:firebase.auth().currentUser.email,
         bookName:"",
         reasonToRequest:"",
     }    
    }
    createUniqueId(){
        return Math.random().toString(36).substring(7);
    }
    addRequest=(thingName, reasonToRequest)=>{
        var userId = this.state.userId
        var randomRequestId = this.createUniqueId()
        db.collection('requested_things').add({
            "userId":userId,
            "thing_name": thingName,
            "reason_to_request":reasonToRequest,
            "request_id" : randomRequestId
        })
        this.setState({
            thingName:'',
            reasonToRequest:''
        })
        return alert("Thing requested successfully")
    }

}