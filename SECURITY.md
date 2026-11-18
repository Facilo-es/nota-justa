# Security policy: Nota Justa

Nota Justa is a Google Forms add-on that corrects quizzes with negative marking and writes the real mark back into Forms. It runs inside the teacher's own Google account. We have no server that stores their data.

## Report a problem privately

Email **support@facilo.es** with "Security" in the subject. Tell us what you found, which version (shown in the sidebar footer), and how to repeat it.

Never send real students' answers, names or emails. A test form with made-up answers is enough.

We read every report and answer as soon as we can. If a report suggests a flaw is being actively exploited, we treat it as urgent, and report it as the EU Cyber Resilience Act requires.

## How fixes are released

1. We confirm the problem and fix it, with a test that fails before the fix.
2. We publish the new code on notajusta.facilo.es/instalar/ and say what changed. A pasted copy doesn't update itself, so for a security fix we put a notice at the top of the install and help pages, saying which versions need the new code pasted in.
3. We note the fix in the changelog, and say who found it if they want to be named.
4. Each release comes with a software bill of materials (`sbom.cdx.json`, CycloneDX). It lists each add-on file with its hash. There is no third-party code.

## Support period

Version 1.x gets security fixes and rule updates for 5 years from the release of 1.0.0. Free and paid users get the same fixes. When the period ends, we will say so on notajusta.facilo.es.

## How Nota Justa protects your data

- It asks Google only for what it needs:
  - the form that is open (not your other forms)
  - showing its sidebar
  - a trigger so it can correct each new response
  - the files it creates itself (the results sheet), never your other files
  - your email address, which is only turned into a one-way code for the licence and never sent as it is
- Answers stay in Google. The only call to us is the licence check, made from the sidebar to Freemius. It carries the licence key and that one-way code, never answers, names or emails.
- The add-on writes only the scores of the open form, and the results sheet it created. It never changes questions, answers or other files.
- Turning it off ("Volver a la puntuación de Forms") puts back Forms' own scores.
- Text from the form is shown with `textContent`, never as HTML. Text written to the sheet is stored as plain text, so an answer that starts with `=` never becomes a formula.
- Logs and error messages hold codes only (NJ-01 to NJ-08), never answers, names or emails.
- There is no analytics or tracking in the add-on.
