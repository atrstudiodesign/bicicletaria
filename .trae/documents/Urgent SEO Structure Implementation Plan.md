I will implement the requested HTML structure changes in `client/src/pages/Home.tsx` and deploy the application.

### **1. Modify `client/src/pages/Home.tsx`**
I will map the requested H1 and H2 tags to the existing semantic sections of the page to maintain design integrity while fulfilling the SEO requirements:

*   **H1 (Primary Title)**: 
    *   Insert `<h1 className="sr-only">R3 Bike Shop – Loja e Oficina de Bicicletas em [Cidade/SP]</h1>` at the top of the page content (Line 388).
    *   *Reasoning*: Using `sr-only` (screen reader only) ensures the H1 is present for SEO and accessibility as the "proeminent" semantic title, without breaking the existing visual design of the Hero Carousel which has its own dynamic typography. *Alternatively, if you prefer it visible, I can place it in the Hero section, but `sr-only` is the standard "urgent fix" to guaranteed structure without design regression.*
    *   Update the existing carousel titles (currently `h1`) to `h3` to strictly satisfy the "Apenas um H1" requirement.

*   **H2 (Subtitles)**:
    1.  **`Acessórios e Peças para Bicicletas`**: Replace the "OFERTA IMPERDÍVEL" title in the **Ofertas** section (Line 749).
    2.  **`Oficina Especializada em Bikes`**: Replace the "OFICINA DE ALTA PERFORMANCE" title in the **Oficina** section (Line 1314).
    3.  **`Manutenção, Revisão e Ajustes`**: Replace the "Serviços da R3 Bike Shop" title in the **Serviços** section (Line 887).
    4.  **`Por que escolher a R3 Bike Shop`**: Replace the "R3 Bike Shop: Quem Somos" title in the **Quem Somos** section (Line 700).

### **2. Build & Deploy**
Immediately after the code changes:
1.  **Build**: Run `npm run build` to generate the production assets and verify integrity.
2.  **Commit**: Git commit with message "Implement urgent SEO structure: H1 and H2 tags".
3.  **Deploy**: Run `git push` to trigger the deployment pipeline.
4.  **Verify**: I will confirm the command success.

**Wait for confirmation:** Shall I proceed with this plan?