import java.util.*;
import java.io.*;

public class Main {
    public static void main(String[] args) {
        FastScanner sc = new FastScanner(System.in);
        PrintWriter out = new PrintWriter(System.out);

        // --- ここにコードを書く ---
        // 例: String s = sc.next();
        // out.println(s);

        out.flush();
    }
}

class FastScanner {
    private final BufferedReader reader;
    private StringTokenizer tokenizer;
    public FastScanner(InputStream in) { reader = new BufferedReader(new InputStreamReader(in)); }
    public String next() {
        while (tokenizer == null || !tokenizer.hasMoreElements()) {
            try { tokenizer = new StringTokenizer(reader.readLine()); } catch (IOException e) { return null; }
        }
        return tokenizer.nextToken();
    }
    public int nextInt() { return Integer.parseInt(next()); }
}