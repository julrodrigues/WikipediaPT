package simples;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;
import static org.junit.Assert.assertTrue;

public class Artigo{
    String url; // endereço do site alvo
    WebDriver driver; // objeto do selenium WebDriver


    @Before         // Antes do teste
    public void iniciar(){
        url = "https://pt.wikipedia.org/";
        System.setProperty("webdriver.chrome.driver", "drivers/chrome/89/chromedriver.exe"); // onde está o Chrome driver
        driver = new ChromeDriver(); // Instanciar o Selenium como Chrome Driver
        driver.manage().window().maximize(); // Maximizar a janela do navegador
        driver.manage().timeouts().implicitlyWait(60000, TimeUnit.MILLISECONDS); // define uma espera
    }

    @Test           // Durante o teste
    public void consultarArtigo(){
        // Abrir o site
        driver.get(url);

        // Pesquisa por "Ovo de Páscoa"
        driver.findElement(By.cssSelector("input.wvui-input__input")).sendKeys("Ovo de Pascoa" + Keys.ENTER);

        // Validar o título da página de retorno
        //assertEquals("Ovo de Páscoa - Wikipédia, a enciclopédia livre", driver.getTitle());
        assertTrue(driver.getTitle().contains("Ovo de Páscoa"));
    }

    @After          // Depois do teste
    public void finalizar(){
        driver.quit();

    }



}
