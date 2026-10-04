import { Link } from "expo-router";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const places = [
    {
        id: "1",
        icon: "⛲",
        name: "Фонтан Roshen",
        description:
            "Одна з найвідоміших пам'яток Вінниці. Великий світломузичний фонтан розташований на набережній Південного Бугу.",
    },
    {
        id: "2",
        icon: "🏛️",
        name: "Вінницькі Мури",
        description:
            "Історичний комплекс у центрі міста, який є важливою пам'яткою архітектури та частиною історії Вінниці.",
    },
    {
        id: "3",
        icon: "🚋",
        name: "Вінницький трамвай",
        description:
            "Вінницький трамвай є одним із символів міста. Він відомий своєю історією та сучасними трамвайними маршрутами.",
    },
    {
        id: "4",
        icon: "🌳",
        name: "Центральний парк",
        description:
            "Великий парк у центрі Вінниці, де можна гуляти, відпочивати та проводити час із друзями.",
    },
];

export default function CityPage() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.container}>
                    <Text style={styles.title}>Вінниця</Text>

                    <Image
                        source={require("../assets/images/city.png")}
                        style={styles.image}
                    />

                    <Text style={styles.sectionTitle}>Моє місто</Text>

                    <Text style={styles.description}>
                        Вінниця — місто в центральній частині України,
                        адміністративний центр Вінницької області. Місто
                        відоме своїм фонтаном Roshen, затишними вулицями,
                        парками та мальовничими краєвидами Південного Бугу.
                    </Text>

                    <Text style={styles.sectionTitle}>
                        Визначні місця
                    </Text>

                    {places.map((place) => (
                        <View key={place.id} style={styles.card}>
                            <Text style={styles.cardTitle}>
                                {place.icon} {place.name}
                            </Text>

                            <Text style={styles.cardDescription}>
                                {place.description}
                            </Text>
                        </View>
                    ))}

                    <Link href="/" style={styles.button}>
                        <Text style={styles.buttonText}>
                            🏠 На головну
                        </Text>
                    </Link>

                    <Link href="/about" style={styles.secondaryButton}>
                        <Text style={styles.secondaryButtonText}>
                            👤 Про мене
                        </Text>
                    </Link>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#F4F7FB",
    },
    scrollContent: {
        paddingBottom: 30,
    },
    container: {
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#172033",
        textAlign: "center",
        marginBottom: 20,
    },
    image: {
        width: "100%",
        height: 250,
        borderRadius: 16,
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 23,
        fontWeight: "bold",
        color: "#172033",
        marginBottom: 12,
    },
    description: {
        fontSize: 17,
        lineHeight: 27,
        color: "#475569",
        marginBottom: 24,
    },
    card: {
        backgroundColor: "#FFFFFF",
        padding: 18,
        borderRadius: 14,
        marginBottom: 14,
        borderWidth: 1,
        borderColor: "#DCE4F0",
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        shadowRadius: 5,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 19,
        fontWeight: "bold",
        color: "#2563EB",
        marginBottom: 8,
    },
    cardDescription: {
        fontSize: 15,
        lineHeight: 23,
        color: "#475569",
    },
    button: {
        backgroundColor: "#2563EB",
        paddingVertical: 15,
        borderRadius: 12,
        marginTop: 10,
        marginBottom: 12,
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "600",
        textAlign: "center",
    },
    secondaryButton: {
        backgroundColor: "#FFFFFF",
        paddingVertical: 15,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#2563EB",
    },
    secondaryButtonText: {
        color: "#2563EB",
        fontSize: 16,
        fontWeight: "600",
        textAlign: "center",
    },
});
