import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Text, FlatList, SafeAreaView, ScrollView, View } from 'react-native';
import { StyleSheet } from 'react-native';
import Button from '../../components/button/Button';
import { defaultStyles } from '../../utils/constants';
import { getScoresRequest } from './actions';

const RankingScreen = ({ navigation, getScores, scores }) => {
    useEffect(() => {
        getScores();
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.content}>
                {scores.length > 0 &&
                    <FlatList
                        data={scores}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item, index }) => (
                            <View style={styles.item}>
                                <Text>#{index+1} {item.name} - O número {item.guess} foi encontrado com {item.attempts} tentativas em {item.time}s</Text>
                            </View>
                        )}
                    />
                }
            </ScrollView>
            <Button label="Voltar" onClick={() => navigation.replace('Home')} />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        marginVertical: 16,
        maxHeight: defaultStyles.heightPercentage('90%')
    },
    content: {
        width: defaultStyles.widthPercentage('90%'),
        paddingHorizontal: 16
    },
    item: {
        alignItems: "center",
        borderBottomColor: defaultStyles.primaryColor,
        borderBottomWidth: 1,
        flexGrow: 1,
        margin: 4,
        padding: 20
    },
});

const mapStateToProps = ({ ranking }) => ({
    loading: ranking.loading,
    error: ranking.error,
    scores: ranking.scores
});

const mapDispatchToProps = (dispatch) => ({
    getScores: () => dispatch(getScoresRequest())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RankingScreen);