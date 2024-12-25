import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Image, Keyboard } from 'react-native';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


interface MessageInputProps {

}

const MessageInput = ({ }: MessageInputProps) => {
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [inputHeight, setInputHeight] = useState(40); // Hauteur initiale
    const [lineCount, setLineCount] = useState(1); // Suivi des lignes

    const [text, setText] = useState('');

    const handleTextChange = (newText: string) => {
        setText(newText);

        // Compter le nombre de lignes dans le texte
        const lines = newText.split('\n').length;

        // Ajuster la hauteur si le nombre de lignes ou la largeur du texte dépasse la zone actuelle
        if (lines !== lineCount || newText.length % 40 === 0) {
            const newHeight = Math.min(160, Math.max(40, lines * 20));
            setInputHeight(newHeight);
            setLineCount(lines); // Mettre à jour le nombre de lignes
        }
    };

    return (
        <View style={[styles.inputArea, { paddingBottom: isKeyboardVisible ? 10 : 30 }]}>
            <View style={[styles.inputWrapper, { height: inputHeight + 10 }]}>

                <TextInput
                    style={[styles.input, { height: inputHeight }]}
                    value={text}
                    onChangeText={handleTextChange}
                    placeholder="Message"
                    placeholderTextColor="#888"
                    multiline
                    textAlignVertical="top"
                    onContentSizeChange={(e) => {
                        const newHeight = Math.min(160, Math.max(40, e.nativeEvent.contentSize.height));
                        setInputHeight(newHeight);
                    }}
                />

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    inputArea: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: "#1E1E1E",
        borderRadius: 20,
        marginBottom: 20,
        marginHorizontal: 10,
    },
    inputWrapper: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 0,
    },
    input: {
        flex: 1,
        color: Colors.text,
        fontSize: 16,
        width: '98%',
        paddingHorizontal: 15,
        backgroundColor: 'transparent',
    },
    sendButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: Colors.sentMessage,
        marginRight: 10,
    },
    sendIcon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MessageInput;