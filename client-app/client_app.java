import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class SoaClient {

    public static void main(String[] args) throws Exception {

        HttpClient client = HttpClient.newHttpClient();

        // User Service Call
        HttpRequest userRequest = HttpRequest.newBuilder()
                .uri(URI.create("http://localhost:5001/user/1"))
                .GET()
                .build();

        HttpResponse<String> userResponse =
                client.send(userRequest, HttpResponse.BodyHandlers.ofString());

        // Order Service Call
        HttpRequest orderRequest = HttpRequest.newBuilder()
                .uri(URI.create("http://localhost:5002/order/101"))
                .GET()
                .build();

        HttpResponse<String> orderResponse =
                client.send(orderRequest, HttpResponse.BodyHandlers.ofString());

        System.out.println("User Service Response:");
        System.out.println(userResponse.body());

        System.out.println("\nOrder Service Response:");
        System.out.println(orderResponse.body());
    }
}
