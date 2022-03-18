
function University() {
    return (
      <div class="university">
        <div class="uni-des">
            <p>
                Currently I am studying a Bachelor of Computer Science, majoring in Software Development.
                One thing that I didn't pick up on or the Uni properly explaining, when a major course
                shows that it is worth 20pts, it acutally means you need to select 20pts of major subjects.
                This now means that I have added an extra year to my degree to study 1 major and a major
                project.
            </p>
        </div>
        <br/>
        <table class="subjects">
            <tr>
                <th class="subject"> Subject </th>
                <th class="mark"> Mark</th>
                <th class="desc"> Description </th>
            </tr>
            <tr>
                <th> Year 1 - Trimester 1 </th>
            </tr>
            <tr>
                <td> Programming Fundamentals </td>
                <td> 6.0 </td>
                <td> Introduction to programming in C. </td>
            </tr>
            <tr>
                <td> Math Fundamentals </td>
                <td> 7.0 </td>
                <td> Math fundamentals, the basics </td>
            </tr>
            <tr>
                <td> Computer Network & Architecture </td>
                <td> 6.0 </td>
                <td> Binary, logic gates and circuits, inner workings of the computer</td>
            </tr>
            <tr>
                <th> Year 1 - Trimester 2 </th>
            </tr>
            <tr>
                <td> Object Orientated Programming </td>
                <td> 6.0 </td>
                <td> Introduction to OOP in C++ and the STL</td>
            </tr>
            <tr>
                <td> Statistics </td>
                <td> 6.0 </td>
                <td> Different statistical measures, using R</td>
            </tr>
            <tr>
                <td> Engineering Math 1 </td>
                <td> 4.0 </td>
                <td> Matrices</td>
            </tr>
            <tr>
                <td> Engineering Math 2 </td>
                <td> 6.0 </td>
                <td> Algebra</td>
            </tr>
            <tr>
                <th> Year 2 - Trimester 1 </th>
            </tr>
            <tr>
                <td> Interactive App Developement </td>
                <td> 7.0 </td>
                <td> Ionic/Angular App Developement</td>
            </tr>
            <tr>
                <td> Programming Principles </td>
                <td> 6.0 </td>
                <td> Fundamentals of programming in Python </td>
            </tr>
            <tr>
                <td> Computing Algorithms </td>
                <td> 6.0 </td> 
                <td> Algorithms, Data Structures and Problem Solving (C++)</td> 
            </tr>
            <tr>
                <td> Intelligient Systems </td>
                <td> 4.0 </td>
                <td> Search algorithms (Python) </td>
            </tr>
            <tr>
                <th> Year 2 - Trimester 2 </th>
            </tr>
            <tr>
                <td> Software Engineering </td>
                <td> 5.0 </td>
                <td> Life cycles and strategies to complete projects</td>
            </tr>
            <tr>
                <td> Programming Languages </td>
                <td> 5.0 </td>
                <td> Exploring different advanced topics in C++, Java and Scala</td>
            </tr>
            <tr>
                <td> Theory of Computing </td>
                <td> 5.0 </td>
                <td> Different types of FA (DFA, NFA), regular languages, CFG, CNF, PDA and TM  </td>
            </tr>
        </table>
      </div>
    );
}

export default University;